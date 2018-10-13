import React, {Component} from 'react';
import './ChordTypeList.css';
import ChordTypeListItem from './ChordTypeListItem';


class ChordTypeList extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			activeNum:this.props.activeTypeNum
		};
		
		this.chordTypesA = this.props.chordTypesA;
		this.clickTypeCallback = this.props.clickTypeCallback;
		
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
		if (newProps.activeTypeNum !== this.state.activeNum)
		{
			this.setState(
			{
				activeNum:newProps.activeTypeNum
			});
		}
	}
	
	compileJsx()
	{
		var jsxA = [];
		
		for (var i=0;i<this.chordTypesA.length;i++)
		{
			var isActive = i === this.state.activeNum ? true : false;
			
			var jsxP = <ChordTypeListItem
						chordType={this.chordTypesA[i]}
						isActive={isActive}
						clickTypeCallback={this.clickTypeCallback}
						key={'chordTypeListItem'+i}
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
			<div id={'chordTypeListContainer'}>
				{jsx}
			</div>
		);
	}
}

export default ChordTypeList;