import React, {Component} from 'react';
import './ChordShiftListItem.css';


class ChordShiftListItem extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			isActive:this.props.isActive,
			className:'chordShiftListItem'
		};
		
		this.symbolType = this.props.symbolType;
		this.clickCallback = this.props.clickShiftCallback;
		
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
		var cName = 'chordShiftListItem';
		if (isActive === true)
		{
			cName = 'chordShiftListItem active';
		}
		
		this.setState(
		{
			isActive:isActive,
			className:cName
		});
	}
	
	clicked(e)
	{
		this.clickCallback(this.symbolType.NUM);
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
		var jsx = <div className={this.state.className} dangerouslySetInnerHTML={{__html:this.symbolType.CODE}}>
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'chordShiftListItemContainer'} onClick={this.clicked}>
				{jsx}
			</div>
		);
	}
}

export default ChordShiftListItem;