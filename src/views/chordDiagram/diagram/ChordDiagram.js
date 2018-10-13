import React, {Component} from 'react';
import './ChordDiagram.css';
import ChordDiagramChordLabel from './label/ChordDiagramChordLabel';
import ChordFretboardManager from './fretboard/ChordFretboardManager';
import ChordDiagramFingerManager from './fingers/ChordDiagramFingerManager';


class ChordDiagram extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			chordDataA:this.props.chordDataA,
			chordLabel:this.props.chordLabel
		};
		
		this.cellSide = this.props.cellSide;
		this.displayInline = this.props.displayInline;
		
		this.container = null;
		this.timeout = null;
		
		this.show = this.show.bind(this);
		this.getLowestAndHighestFretsA = this.getLowestAndHighestFretsA.bind(this);
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		this.container.style.width = (this.cellSide * 6)+'px';
		this.timeout = setTimeout(this.show,10);
		
		if (this.displayInline === true)
		{
			this.container.style.display = 'inline-block';
			this.container.style.margin = '0 10px 0 10px';
		}
	}
	
	componentWillReceiveProps(newProps)
	{
		if (newProps.chordDataA !== this.state.chordDataA)
		{
			this.setState(
			{
				chordDataA:newProps.chordDataA,
				chordLabel:newProps.chordLabel
			});
		}
	}
	
	show()
	{
		this.timeout = null;
		this.container.style.opacity = 1;
	}
	
	compileJsx()
	{
		var fretRangeA = this.getLowestAndHighestFretsA();
		
		var jsx = <div>
					<ChordDiagramChordLabel
						cellSide={this.cellSide}
						chordLabel={this.state.chordLabel}
					/>
					<ChordFretboardManager
						fretRangeA={fretRangeA}
						cellSide={this.cellSide}
						chordDataA={this.state.chordDataA.DOTS}
					/>
					<ChordDiagramFingerManager
						cellSide={this.cellSide}
						chordDataA={this.state.chordDataA.FINGERS}
					/>
				  </div>
		
		return jsx;
	}
	
	getLowestAndHighestFretsA()
	{
		var arr;
		var lowestFretN = 12;
		var highestFretN = 0;
		
		for (var i=0;i<this.state.chordDataA.DOTS.length;i++)
		{
			if (this.state.chordDataA.DOTS[i] > highestFretN)
			{
				highestFretN = Number(this.state.chordDataA.DOTS[i]);
			}
			
			if (this.state.chordDataA.DOTS[i] < lowestFretN)
			{
				lowestFretN = Number(this.state.chordDataA.DOTS[i]);
			}
		}
		
		if (highestFretN < 3)
		{
			highestFretN = 3;
		}
		
		arr = [lowestFretN,highestFretN];
		
		return arr;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'chordDiagramContainer'} ref={(elem)=>this.container=elem}>
				{jsx}
			</div>
		);
	}
}

export default ChordDiagram;