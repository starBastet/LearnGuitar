import React, {Component} from 'react';
import './ChordShiftList.css';
import ChordShiftListItem from './ChordShiftListItem';


class ChordShiftList extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			activeNum:this.props.activeShiftNum
		};
		
		this.symbolCodesA = [
								{NUM:0,CODE:'&#9837;'},
								{NUM:1,CODE:'&#9838;'},
								{NUM:2,CODE:'&#x266f;'}
							];
		
		this.clickShiftCallback = this.props.clickShiftCallback;
		
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
		if (newProps.activeShiftNum !== this.state.activeNum)
		{
			this.setState(
			{
				activeNum:newProps.activeShiftNum
			});
		}
	}
	
	shouldComponentUpdate(nextProps,nextState)
	{
		return (nextProps.activeShiftNum !== this.state.activeNum);
	}
	
	compileJsx()
	{
		var jsxA = [];
		
		for (var i=0;i<this.symbolCodesA.length;i++)
		{
			var isActive = i === this.state.activeNum ? true : false;
			
			var jsxP = <ChordShiftListItem
						symbolType={this.symbolCodesA[i]}
						isActive={isActive}
						clickShiftCallback={this.clickShiftCallback}
						key={'chordShiftListItem'+i}
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
			<div className={'chordShiftListContainer'}>
				{jsx}
			</div>
		);
	}
}

export default ChordShiftList;