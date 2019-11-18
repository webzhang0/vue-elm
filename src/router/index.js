const routers = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: (resolve) => require(['../page/home/home'], resolve)
	}
]

export default routers
