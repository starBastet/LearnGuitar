import React, {Component} from 'react';
import './ChordFretboardStrings.css';


class ChordFretboardStrings extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			
		};
		
		this.cellSide = this.props.cellSide;
		
		this.fretAmount = 6;
		this.container = null;
		
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		
	}
	
	shouldComponentUpdate(nextProps,nextState)
	{
		return false;
	}
	
	compileJsx()
	{
		var jsxA = [];
		var stringAmount = 6;
		
		for (var i=0;i<stringAmount;i++)
		{
			var W = 2;
			var H = (this.cellSide * this.fretAmount) + (this.cellSide*.5)
			var X = (this.cellSide * i) - (W*.5);
			
			var jsxP = <div 
						className={'chordString'}
						style={{width:W+'px',left:X+'px',height:H+'px'}}
						key={'chordString'+i}
					   >
					   </div>;
			
			
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
			<div className={'chordFretboardStringsContainer'} ref={(elem)=>this.container=elem}>
				{jsx}
			</div>
		);
	}
}

export default ChordFretboardStrings;