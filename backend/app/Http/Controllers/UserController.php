<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserStoreRequest;
use App\Models\User;

class UserController extends Controller
{
    public function login(UserLoginRequest $request) {
        $data = $request->validated();
        if(!Auth::attempt($data)){
            return $this->sendError("Usuário ou senha incorretos");
        }
        $user = Auth::user();
        $accessToken = $user->createToken('authToken')->accessToken;
        return $this->sendSuccess("Usuário autenticado com sucesso", $accessToken);
    }

    public function logout(Request $request) {
        if (Auth::check()) {
            $token = Auth::user()->token();
            $token->revoke();
            return $this->sendSuccess('Usuário deslogado com sucesso');
        } else {
            return $this->sendError('Não autorizado', 403);
        } 
    }

    public function register(UserStoreRequest $request) {
        $data = $request->validated();
        $data['password'] = bcrypt($data['password']);
        $user = User::create($data);
        if($user) {
            $user->accessToken = $user->createToken('authToken')->accessToken;
            return $this->sendSuccess("Usuário cadastrado com sucesso", $user);
        }
        return $this->sendError("Erro ao cadastrar usuário");
    }
}
