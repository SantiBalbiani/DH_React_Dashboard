import React from 'react';
//import logo from './logo.svg';
//import './App.css';

//Acá van mis componentes

import Saludar from './components/Saludar';
import Sidebar from './components/Sidebar';
import Metric from './components/Metric';

let DatosComponentes = [
  {
    Otro Json
  },
  {
    Un Json
  }
]

function App() {
  return (
    
    <div id="wrapper">

{/* hola soy un comment */}
  <Sidebar/>

	
		<div id="content-wrapper" class="d-flex flex-column">

			
			<div id="content">

			
				<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

				
					<button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
						<i class="fa fa-bars"></i>
					</button>

				
					<ul class="navbar-nav ml-auto">

				
						<li class="nav-item dropdown no-arrow mx-1">
							<a class="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i class="fas fa-bell fa-fw"></i>
						
								<span class="badge badge-danger badge-counter">3+</span>
							</a>
						</li>

				
						<li class="nav-item dropdown no-arrow mx-1">
							<a class="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i class="fas fa-envelope fa-fw"></i>
							
								<span class="badge badge-danger badge-counter">7</span>
							</a>
						</li>

						<div class="topbar-divider d-none d-sm-block"></div>

					
						<li class="nav-item dropdown no-arrow">
							<a class="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span class="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
								<img class="img-profile rounded-circle" src="assets/images/dummy-avatar.jpg" width="60" />
							</a>
						</li>

					</ul>

				</nav>
			

				
				<div class="container-fluid">

				
					<div class="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

			
					<div class="row">

 
    {/* Componente React */}

    {
      data.map(function(unDato, i){

     return(

    <Metric
    soyElKpo = {true}
    title = {unDato.title}
    edad = {35}
    border = "border-left-primary"
    icon = "fa-clipboard-list"
    value = {unDato.value}
    />
     )
 })
    }

						
						<div class="col-md-4 mb-4">
							<div class="card border-left-success shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Amount in products</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">$546.456</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						
						<div class="col-md-4 mb-4">
							<div class="card border-left-warning shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Users quantity
											</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">38</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-user-check fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				
					<div class="row">
		
						<div class="col-lg-6 mb-4">
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h6 class="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
								</div>
								<div class="card-body">
									<div class="text-center">
										<img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem;"}} src="assets/images/product_dummy.svg" alt="image dummy" />
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
									<a target="_blank" rel="nofollow" href="/">View product detail</a>
								</div>
							</div>
						</div>

				
						<div class="col-lg-6 mb-4">						
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 01
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 02
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 03
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 04
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 05
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 06
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
			</div>

			<footer class="sticky-footer bg-white">
				<div class="container my-auto">
					<div class="copyright text-center my-auto">
						<span>Copyright &copy; Dashboard 2020</span>
					</div>
				</div>
			</footer>

		</div>


	</div>
   
  )
}

export default App;
