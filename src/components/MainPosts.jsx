import React from 'react'
import { Input } from 'antd';
import { Col, Row } from 'antd';

import css from "../styles/posts.module.css"
import PostsList from './PostsList';

const { TextArea } = Input;
function MainPosts() {
	return (
	<Row>
		<Col span={24}><h2>My posts</h2>
			<TextArea showCount maxLength={100} autoSize = { true } />
			<PostsList />
		</Col>
	</Row>
	)
}

export default MainPosts