// Darkmode Toggle
document.querySelectorAll('.sidebar-submenu').forEach(e => {
    e.querySelector('.sidebar-menu-dropdown').onclick = (event) => {
        event.preventDefault()
        e.querySelector('.sidebar-menu-dropdown .dropdown-icon').classList.toggle('active')

        let dropdown_content = e.querySelector('.sidebar-menu-dropdown-content')
        let dropdown_content_list = dropdown_content.querySelectorAll('li')

        let active_height = dropdown_content_list[0].clientHeight * dropdown_content_list.length

        dropdown_content.classList.toggle('active')

        dropdown_content.style.height = dropdown_content.classList.contains('active') ? active_height + 'px' : '0'
    }
})


// Pie Chart
let  category_options = {
        series: [44, 55, 41, 17],
        labels: ['Clothes', 'Devices', 'Bags', 'Assault'],
        chart: {
            type: 'donut',
        },
        colors: ['#6ab04c', '#2980b9', '#f39c12', '#d35480']
}

let category_chart = new ApexCharts(document.querySelector("#category-chart"), category_options);
category_chart.render()


// Line Chart
let customer_options = {
        series: [{
            name: "Store Customers",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 14]
        },{
            name: "Online Customers",
            data: [20, 30, 10, 20, 16, 40, 80, 51, 32]
        }],
        colors: ['#6ab04c', '#2980b9'],
        chart: {
            height: 350,
            type: 'line',
        },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    legend: {
        position: 'top'
    }
};

var customer_chart = new ApexCharts(document.querySelector("#customer-chart"), customer_options)
customer_chart.render();

setDarkChart = (dark) => {
    let theme = {
        theme: {
            mode: dark ? 'dark' : 'light'
        }
    }

    customer_chart.updateOptions(theme)
    category_chart.updateOptions(theme)
}



// Dark Mode Toggle
let darkmode_toggle = document.querySelector('#darkmode-toggle')

darkmode_toggle.onclick = (e) => {
    e.preventDefault()
    document.querySelector('body').classList.toggle('dark')
    darkmode_toggle.querySelector('darkmode-switch').classList.toggle('active')
    setDarkChart(document.querySelector('body').classList.contains('dark'))
}

let overlay = document.querySelector('overlay')
let sidebar = document.querySelector('.sidebar')

document.querySelector('#mobile-toggle').onclick = () => {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}

document.querySelector('#sidebar-close').onclick = () => {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}