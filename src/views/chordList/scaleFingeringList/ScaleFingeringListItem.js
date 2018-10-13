import React, {Component} from 'react';
import './ScaleFingeringListItem.css';


class ScaleFingeringListItem extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			isActive:this.props.isActive,
			className:'scaleFingeringListItem'
		};
		
		this.num = this.props.num;
		this.clickCallback = this.props.clickFingeringCallback;
		
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
		var cName = 'scaleFingeringListItem';
		if (isActive === true)
		{
			cName = 'scaleFingeringListItem active';
		}
		
		this.setState(
		{
			isActive:isActive,
			className:cName
		});
	}
	
	clicked(e)
	{
		this.clickCallback(this.num-1);
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
		                       // dangerouslySetInnerHTML={{__html:this.num}}
		var jsx = <div className={this.state.className}>
					<p className={'counterClockwise'}>
						{this.num}
					</p>
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'scaleFingeringListItemContainer'} onClick={this.clicked}>
				{jsx}
			</div>
		);
	}
}

export default ScaleFingeringListItem;