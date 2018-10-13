import React, {Component} from 'react';
import './ScaleFingeringList.css';
import ScaleFingeringListItem from './ScaleFingeringListItem';


class ScaleFingeringList extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			activeNum:this.props.activeFingeringNum
		};
		
		this.clickFingeringCallback = this.props.clickFingeringCallback;
		
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		
	}
	
	componentWillReceiveProps(newProps)
	{
		if (newProps.activeFingeringNum !== this.state.activeNum)
		{
			this.setState(
			{
				activeNum:newProps.activeFingeringNum
			});
		}
	}
	
	shouldComponentUpdate(nextProps,nextState)
	{
		return (nextProps.activeFingeringNum !== this.state.activeNum);
	}
	
	compileJsx()
	{
		var jsxA = [];
		
		for (var i=0;i<3;i++)
		{
			var isActive = i === this.state.activeNum ? true : false;
			
			var jsxP = <ScaleFingeringListItem
						num={i+1}
						isActive={isActive}
						clickFingeringCallback={this.clickFingeringCallback}
						key={'scaleFingeringListItem'+i}
					  />;
			
			jsxA.push(jsxP);
		}
		
		var jsx = <div>
					{jsxA}
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'scaleFingeringListContainer'}>
				{jsx}
			</div>
		);
	}
}

export default ScaleFingeringList;