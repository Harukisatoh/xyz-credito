import React from 'react'

import Header from '../../components/Header';
import DashboardTable from '../../components/DashboardTable';
import Menu from '../../components/Menu';

import './styles.css'

function Dashboard() {
    return(
        <div id="dashboard-container" className="container">
            <Header title="XYZ Crédito" />
            <DashboardTable />
            <Menu />
        </div>
    )
}

export default Dashboard
