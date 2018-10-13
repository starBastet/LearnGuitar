import React, {Component} from 'react';
import './ChordFretboardManager.css';
import ChordFretboardFrets from './frets/ChordFretboardFrets';
import ChordFretboardStrings from './strings/ChordFretboardStrings';
import ChordDotManager from './dots/ChordDotManager';


class ChordFretboardManager extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			fretRangeA:this.props.fretRangeA,
			chordDataA:this.props.chordDataA
		};
		
		this.cellSide = this.props.cellSide;
		
		this.container = null;
		
		this.adjustToHighestFret = this.adjustToHighestFret.bind(this);
		this.updateContainerH = this.updateContainerH.bind(this);
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		var highestFret = this.adjustToHighestFret(this.state.fretRangeA);
		this.updateContainerH(highestFret * this.cellSide);
		this.container.style.width = (this.cellSide * 5.5) + 'px';
	}
	
	componentWillReceiveProps(newProps)
	{
		if (newProps.fretRangeA !== this.state.fretRangeA)
		{
			var highestFret = this.adjustToHighestFret(newProps.fretRangeA);
			this.updateContainerH(highestFret * this.cellSide);
			
			this.setState(
			{
				fretRangeA:newProps.fretRangeA
			});
		}
		
		if (newProps.chordDataA !== this.state.chordDataA)
		{
			this.setState(
			{
				chordDataA:newProps.chordDataA
			});
		}
	}
	
	adjustToHighestFret(fretRangeA)
	{
		var highestFret = fretRangeA[1];
		if (fretRangeA[0] >= 4)
		{
			highestFret -= (fretRangeA[0]-1);
			if (highestFret < 3)
			{
				highestFret = 3;
			}
		}
		
		return highestFret;
	}
	
	updateContainerH(H)
	{
		H += this.cellSide * .5;
		this.container.style.height = H + 'px';
	}
	
	compileJsx()
	{
		var jsx = <div>
					<ChordFretboardFrets
						cellSide={this.cellSide}
						lowestFret={this.state.fretRangeA[0]}
					/>
					<ChordFretboardStrings
						cellSide={this.cellSide}
					/>
					<ChordDotManager
						cellSide={this.cellSide}
						fretRangeA={this.state.fretRangeA}
						chordDataA={this.state.chordDataA}
					/>
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'chordFretboardManagerContainer'} ref={(elem)=>this.container=elem}>
				{jsx}
			</div>
		);
	}
}

export default ChordFretboardManager;