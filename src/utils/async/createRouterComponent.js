//创建路由组件
import React from 'react';
import Bundle from './Bundle';
const createRouterComponent = (component)  => (props) => (
	<Bundle load={component}>
		{
			(Comp) => Comp ? <Comp {...props}/>:null
		}
	</Bundle>
);

export default createRouterComponent;