import React, { Component } from "react";
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const styles = {
	Image :{
		size:200 
	}
}


class Portfolio extends Component {



	render() {
		return(
			<List>
			<ListItem
			disabled={true}
			leftAvatar={
				<Avatar src="portfolio.jpg" />
			}
			>
			Image Avatar
			</ListItem>
			</List>



			)
	}
}

export default Portfolio;
