import React from 'react'

function Sidebar() {
    return(
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

	
			<a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div class="sidebar-brand-icon">
					<i class="fas fa-chart-line"></i>
				</div>
				<div class="sidebar-brand-text mx-3">Admin</div>
			</a>

	
			<hr class="sidebar-divider my-0" />

		
			<li class="nav-item active">
				<a class="nav-link" href="/">
					<i class="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span></a>
			</li>

		
			<hr class="sidebar-divider" />


			<div class="sidebar-heading">Actions</div>

			<li class="nav-item">
				<a class="nav-link collapsed" href="/">
					<i class="fas fa-fw fa-folder"></i>
					<span>Pages</span>
				</a>
			</li>

		
			<li class="nav-item">
				<a class="nav-link" href="/">
					<i class="fas fa-fw fa-chart-area"></i>
					<span>Charts</span></a>
			</li>

		
			<li class="nav-item">
				<a class="nav-link" href="/">
					<i class="fas fa-fw fa-table"></i>
					<span>Tables</span></a>
			</li>

		
			<hr class="sidebar-divider d-none d-md-block" />
		</ul>
	
    )
}

export default Sidebar;