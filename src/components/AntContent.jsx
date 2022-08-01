import React from 'react';
import { Layout } from "antd";


const { Content } = Layout;

function AntContent({routes, footer}) {
	return (
		<Content
          style={{
            margin: "0 16px",
            width: "100%",
            flexWrap: "wrap",
          }}
        ><div
				className="site-layout-background"
				style={{
					padding: 24,
					minHeight: 360,
				}}
			>
				{routes}
			</div>
			{footer}
		</Content>

	)
}

export default AntContent