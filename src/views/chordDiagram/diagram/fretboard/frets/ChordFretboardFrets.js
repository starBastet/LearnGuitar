import React, {Component} from 'react';
import './ChordFretboardFrets.css';
import FretMarker from './../../fretMarker/FretMarker';


class ChordFretboardFrets extends Component
{
	constructor(props,context)
	{
		super(props,context);
			//fretAmount:this.props.fretAmount
		this.state={
			lowestFret:this.props.lowestFret
		};
		
		this.cellSide = this.props.cellSide;
		
		this.fretAmount = 7;
		
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
		if (newProps.lowestFret !== this.state.lowestFret)
		{
			this.setState(
			{
				lowestFret:newProps.lowestFret
			});
		}
	}
	
	shouldComponentUpdate(nextProps,nextState)
	{
		return (nextProps.lowestFret !== this.state.lowestFret);
	}
	
	compileJsx()
	{
		var jsxA = [];
		
		for (var i=0;i<this.fretAmount;i++)
		{
			var Y = (this.cellSide * i) - 1;
			var W = this.cellSide * 5;
			
			var jsxP = <div 
						className={'chordFret'}
						style={{top:Y+'px',width:W+'px'}}
						key={'chordFret'+i}
					   >
					   </div>;
			jsxA.push(jsxP);
		}
		
		var fretMarkerJsx = null;
		if (this.state.lowestFret >= 4)
		{
			fretMarkerJsx = <FretMarker
						 	fretNum={this.state.lowestFret}
							cellSide={this.cellSide}
						 />;
		}
		
		
		var jsx = <div>
					{jsxA}
					{fretMarkerJsx}
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'chordFretboardFretsContainer'}>
				{jsx}
			</div>
		);
	}
}

export default ChordFretboardFrets;