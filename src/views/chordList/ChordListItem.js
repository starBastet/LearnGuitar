import React, {Component} from 'react';
import './ChordListItem.css';


class ChordListItem extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			isActive:this.props.isActive,
			className:'chordListItem'
		};
		
		this.chordName = this.props.chordName;
		this.chordNum = this.props.chordNum;
		this.clickCallback = this.props.clickChordCallback;
		
		this.startActive = false;
		
		this.showIsActive = this.showIsActive.bind(this);
		this.clicked = this.clicked.bind(this);
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		if (this.state.isActive === true)
		{
			this.startActive = true;
		}
	}
	
	componentDidMount()
	{
		this.showIsActive(this.state.isActive);
	}
	
	componentWillReceiveProps(newProps)
	{
		if (newProps.isActive !== this.state.isActive)
		{
			this.showIsActive(newProps.isActive);
		}
	}
	
	showIsActive(isActive)
	{
		var cName = 'chordListItem';
		if (isActive === true)
		{
			cName = 'chordListItem active';
		}
		
		this.setState(
		{
			isActive:isActive,
			className:cName
		});
	}
	
	clicked(e)
	{
		this.clickCallback(this.chordNum);
	}
	
	shouldComponentUpdate(nextProps,nextState)
	{
		if (this.startActive === true)
		{
			this.startActive = false;
			return true;
		}
		return (nextProps.isActive !== this.state.isActive);
	}
	
	compileJsx()
	{
		var jsx = <div className={this.state.className}>
					{this.chordName}
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'chordListItemContainer'} onClick={this.clicked}>
				{jsx}
			</div>
		);
	}
}

export default ChordListItem;