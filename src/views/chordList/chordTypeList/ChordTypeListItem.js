import React, {Component} from 'react';
import './ChordTypeListItem.css';


class ChordTypeListItem extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			isActive:this.props.isActive,
			className:'chordTypeListItem'
		};
		
		this.chordType = this.props.chordType;
		this.clickCallback = this.props.clickTypeCallback;
		
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
		var cName = 'chordTypeListItem';
		if (isActive === true)
		{
			cName = 'chordTypeListItem active';
		}
		
		this.setState(
		{
			isActive:isActive,
			className:cName
		});
	}
	
	clicked(e)
	{
		this.clickCallback(this.chordType);
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
					{this.chordType}
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'chordTypeListItemContainer'} onClick={this.clicked}>
				{jsx}
			</div>
		);
	}
}

export default ChordTypeListItem;