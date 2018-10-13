import React, {Component} from 'react';
import './ChordDotManager.css';
import ChordDot from './ChordDot';


class ChordDotManager extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			chordDataA:this.props.chordDataA,
			fretRangeA:this.props.fretRangeA,
			containerClassName:''
		};
		
		this.cellSide = this.props.cellSide;
		
		this.container = null;
		this.timeout = null;
		
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
			this.timeout = setTimeout(this.show,205,newProps.chordDataA,newProps.fretRangeA);
		}
	}
	
	show(chordDataA,fretRangeA)
	{
		this.timeout = null;
		this.container.style.opacity = 1;
		this.setState(
		{
			chordDataA:chordDataA,
			fretRangeA:fretRangeA
		});
	}
	
	compileJsx()
	{
		var chordDataA = this.state.chordDataA;
		
		var jsxA = [];
		
		for (var i=0;i<chordDataA.length;i++)
		{
			if (Number(chordDataA[i]) > 0)
			{
				var X = this.cellSide * i;
				var Y = ((chordDataA[i]-1) * this.cellSide) + (this.cellSide *.5);
				
				if (this.state.fretRangeA[0] >= 4)
				{
					Y -= (this.cellSide * (this.state.fretRangeA[0]-1))
				}
				
				var W = Math.round(this.cellSide*.6667);
				var coordsA = {X:X,Y:Y,W:W};
				var jsxP = <ChordDot
							coordsA={coordsA}
							key={'chordDot'+i}
						  />;
				
				jsxA.push(jsxP);
				
			}
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
			<div className={'chordDotManagerContainer'} ref={(elem)=>this.container=elem}>
				{jsx}
			</div>
		);
	}
}

export default ChordDotManager;