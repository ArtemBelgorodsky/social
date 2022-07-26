
import "antd/dist/antd.css";
import { Row, Col, Image } from "antd";
import React from "react";
import css from "../styles/main.module.css"





const Main = () => {
  
  return (
		<>
		<Row>
      <Col span={5}>
			<Image
    		
    		src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  		/>
			</Col>
			<Col span={19} 
			className={css.avatar_text}>
				О себе
			</Col>
    </Row>
    <Row>
      <Col span={5}
			className={css.avatar_text}>Анита Цой</Col>
    </Row>
		</>
	)
	}
export default Main
