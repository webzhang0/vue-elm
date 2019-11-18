const routers = [
	{
		path: '/',
		component: (resolve) => require(['../page/home/home'], resolve)
	}
]

export default routers
