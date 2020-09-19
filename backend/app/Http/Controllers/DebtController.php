<?php

namespace App\Http\Controllers;

use App\Http\Requests\DebtDeleteRequest;
use App\Http\Requests\DebtRetrieveRequest;
use App\Http\Requests\DebtStoreRequest;
use App\Http\Requests\DebtUpdateRequest;
use App\Models\Debtor;
use App\Models\Debt;

class DebtController extends Controller
{
    public function create(DebtStoreRequest $request) {
        $data = $request->validated();

        $debtor = array(
            "name"=>$data['debtor_name'],
            "cpf_cnpj"=>$data['debtor_cpf_cnpj']
        );
        
        if(Debtor::where('cpf_cnpj', $debtor['cpf_cnpj'])->count() == 0){
            Debtor::create($debtor);
        }
        
        $value = $data['value'];
        $user_id = auth('api')->user()->id;
        $debtor_id = Debtor::where('cpf_cnpj', $debtor['cpf_cnpj'])->value('id');

        $debt = array(
            "value"=>$value,
            "user_id"=>$user_id,
            "debtor_id"=>$debtor_id
        );

        $debt_id = Debt::create($debt)->id;
        return $this->sendSuccess("Débito registrado com sucesso", $debt_id);
    }

    public function getRegisteredDebtsByUser() {
        $user_id = auth('api')->user()->id;

        $debts = Debt::join('debtors', 'debts.debtor_id', '=', 'debtors.id')
                        ->select('debts.id', 'debts.value', 'debtors.name as debtor_name', 'debtors.cpf_cnpj as debtor_cpf_cnpj')
                        ->where('user_id', $user_id)
                        ->get();

        return $this->sendData($debts);
    }

    public function index(DebtRetrieveRequest $request) {
        $data = $request->validated();

        try {
            $debtor = Debtor::select('id', 'name', 'cpf_cnpj')->where('cpf_cnpj', $data['cpf_cnpj'])->first();

            $debts = Debt::join('users', 'debts.user_id', '=', 'users.id')
                            ->select('debts.id as debt_id', 'debts.value', 'users.name as user_name', 'users.cpf_cnpj as user_cpf_cnpj')
                            ->where('debtor_id', $debtor['id'])
                            ->get();

            $result = array(
                'debtor_id' => $debtor['id'],
                'debtor_name' => $debtor['name'],
                'debtor_cpf_cnpj' => $debtor['cpf_cnpj'],
                'debts' => $debts
            );

            return $this->sendSuccess("Débitos encontrados com sucesso", $result);
        } catch (\Throwable $th) {
            return $this->sendSuccess('Nenhum débito foi encontrado');
        }
    }

    public function delete(DebtDeleteRequest $request) {
        $debt_id = $request->validated()['id'];

        $current_user_id = auth('api')->user()->id;
        $debt_user_id = Debt::where('id', $debt_id)->value('user_id');

        if($current_user_id == $debt_user_id) {
            Debt::where('id', $debt_id)->delete();

            return $this->sendSuccess("O débito foi deletado com sucesso");
        } else {
                return $this->senderror('Não autorizado', 403);
            }
    }

    public function update(DebtUpdateRequest $request) {
        $data = $request->validated();

        $current_user_id = auth('api')->user()->id;
        $debt_user_id = Debt::where('id', $data['id'])->value('user_id');
        
        if ($current_user_id == $debt_user_id) {
            $updatedDebt = ['value' => $request->value];
            Debt::where('id', $data['id'])->update($updatedDebt);

            return $this->sendSuccess("O débito foi alterado com sucesso");
        } else {
            return $this->senderror('Não autorizado', 403);
        }
    }
}
