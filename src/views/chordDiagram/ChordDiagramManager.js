import React, {Component} from 'react';
import './ChordDiagramManager.css';
import ChordList from './../chordList/ChordList';
import ChordDiagram from './diagram/ChordDiagram';


class ChordDiagramManager extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			chordNum:0,
			chordType:'MAJOR',
			chordShift:'NATURAL'
		};
		
		this.chordsA = this.props.chordsA;
		this.chordTypesA = this.props.chordTypesA;
		this.chordNamesA = this.chordsA.map(function(elem){return elem.NAME});
		
		this.CELL_SIDE = 30;
		
		this.chordNameClicked = this.chordNameClicked.bind(this);
		this.chordTypeClicked = this.chordTypeClicked.bind(this);
		this.chordShiftClicked = this.chordShiftClicked.bind(this);
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		
	}
	
	chordNameClicked(num)
	{
		if (num !== this.state.chordNum)
		{
			this.setState(
			{
				chordNum:num
			});
		}
	}
	
	chordTypeClicked(type)
	{
		var newType = type.toUpperCase();
		
		if (newType !== this.state.chordType)
		{
			this.setState(
			{
				chordType:newType
			});
		}
	}
	
	chordShiftClicked(newShift)
	{
		var newShiftString = 'NATURAL';
		if (newShift === 0)
		{
			newShiftString = 'FLAT';
		}
		else if (newShift === 2)
		{
			newShiftString = 'SHARP';
		}
		
		if (newShift !== this.state.chordShift)
		{
			this.setState(
			{
				chordShift:newShiftString
			});
		}
	}
	
	compileJsx()
	{
		var shiftSymbol = '';
		var activeShiftNum = 1;
		if (this.state.chordShift === 'FLAT')
		{
			shiftSymbol = '&#9837;';
			activeShiftNum = 0;
		}
		else if (this.state.chordShift === 'SHARP')
		{
			shiftSymbol = '&#x266f;';
			activeShiftNum = 2;
		}
		
		var jsx = <div>
					<ChordList
						chordNamesA={this.chordNamesA}
						chordTypesA={this.chordTypesA}
						activeChordNum={this.state.chordNum}
						activeTypeNum={0}
						activeShiftNum={activeShiftNum}
						clickChordCallback={this.chordNameClicked}
						clickTypeCallback={this.chordTypeClicked}
						clickShiftCallback={this.chordShiftClicked}
						clickFingeringCallback={null}
					/>
					
					<ChordDiagram
						cellSide={this.CELL_SIDE}
						chordDataA={this.chordsA[this.state.chordNum].MARKERS[this.state.chordShift][this.state.chordType]}
						chordLabel={this.chordNamesA[this.state.chordNum]+shiftSymbol+' '+this.state.chordType.toLowerCase()}
					/>
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'chordDiagramManagerContainer'}>
				{jsx}
			</div>
		);
	}
}

export default ChordDiagramManager;