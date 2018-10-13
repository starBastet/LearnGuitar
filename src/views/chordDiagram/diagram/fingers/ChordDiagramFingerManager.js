import React, {Component} from 'react';
import './ChordDiagramFingerManager.css';
import ChordDiagramFingerItem from './ChordDiagramFingerItem';


class ChordDiagramFingerManager extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			chordDataA:this.props.chordDataA
		};
		
		this.cellSide = this.props.cellSide;
		
		this.timeout = null;
		this.container = null;
		
		this.show = this.show.bind(this);
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
		if (newProps.chordDataA !== this.state.chordDataA)
		{
			this.container.style.opacity = 0;
			this.timeout = setTimeout(this.show,205,newProps.chordDataA);
		}
	}
	
	show(chordDataA)
	{
		this.timeout = null;
		this.container.style.opacity = 1;
		this.setState(
		{
			chordDataA:chordDataA
		});
	}
	
	compileJsx()
	{
		var jsxA = [];
		for (var i=0;i<this.state.chordDataA.length;i++)
		{
			var X = this.cellSide * i;
			
			var jsxP = <ChordDiagramFingerItem
					  	string={this.state.chordDataA[i]}
						cellSide={this.cellSide}
						X={X}
						key={'chordDiagramFingerItem'+i}
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
			<div className={'chordDiagramFingerManagerContainer'} ref={(elem)=>this.container=elem}>
				{jsx}
			</div>
		);
	}
}

export default ChordDiagramFingerManager;