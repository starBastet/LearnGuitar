import React, {Component} from 'react';
import './Base.css';
import Header from './views/sections/Header';
import Introduction from './views/sections/Introduction';
import ChordDiagrams from './views/sections/ChordDiagrams';
import ChordDiagrammer from './views/sections/ChordDiagrammer';
import KeyChordFinder from './views/sections/KeyChordFinder';
import KeyChordRandomizer from './views/sections/KeyChordRandomizer';
import KeyChordSystem from './views/sections/KeyChordSystem';
import SharpsAndFlats from './views/sections/SharpsAndFlats';
import Tablature from './views/sections/Tablature';
import SharpsAndFlatsRevisited from './views/sections/SharpsAndFlatsRevisited';
import MajorScales from './views/sections/MajorScales';
import ScaleFinder from './views/sections/ScaleFinder';
import DailyExercise from './views/sections/DailyExercise';
import Outroduction from './views/sections/Outroduction';


class Base extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			jDataA:this.props.jDataA,
			className:''
		};
		
		this.timeout = null;
		
		this.show = this.show.bind(this);
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		this.timeout = setTimeout(this.show,10);
	}
	
	show(e)
	{
		this.timeout = null;
		this.setState(
		{
			className:'show'
		});
	}
	
	compileJsx()
	{
		
		/*
					<ChordDiagramManager
					chordsA={this.state.jDataA.CHORDS_A}
					chordTypesA={this.state.jDataA.CHORD_TYPES_A}
					/>
					
					<div style={{width:'100%',textAlign:'center',marginTop:'30px'}}>
					<ChordDiagram
						cellSide={20}
						chordDataA={this.state.jDataA.CHORDS_A[2].MARKERS.MAJOR}
						chordLabel={this.state.jDataA.CHORDS_A[2].NAME+' '+this.state.jDataA.CHORD_TYPES_A[0].toLowerCase()}
						float={'left'}
					/>
		*/
		
		
		var jsx = <div>
					<Header
						
					/>
					<Introduction
						dataA={this.state.jDataA.SECTION_CONTENT[0]}
					/>
					<ChordDiagrams
						dataA={this.state.jDataA.SECTION_CONTENT[1]}
						chordDataA={this.state.jDataA.CHORDS_A[2].MARKERS.SHARP.MINOR}
						chordLabel={this.state.jDataA.CHORDS_A[2].NAME+'&#x266f; '+this.state.jDataA.CHORD_TYPES_A[1].toLowerCase()}
					/>
					<ChordDiagrammer
						dataA={this.state.jDataA.SECTION_CONTENT[2]}
						chordsA={this.state.jDataA.CHORDS_A}
						chordTypesA={this.state.jDataA.CHORD_TYPES_A}
					/>
					<KeyChordFinder
						dataA={this.state.jDataA.SECTION_CONTENT[3]}
						chordsA={this.state.jDataA.CHORDS_A}
						chordTypesA={this.state.jDataA.CHORD_TYPES_A}
					/>
					<KeyChordRandomizer
						dataA={this.state.jDataA.SECTION_CONTENT[4]}
						chordsA={this.state.jDataA.CHORDS_A}
						chordTypesA={this.state.jDataA.CHORD_TYPES_A}
					/>
					<KeyChordSystem
						dataA={this.state.jDataA.SECTION_CONTENT[5]}
					/>
					<SharpsAndFlats
						dataA={this.state.jDataA.SECTION_CONTENT[6]}
					/>
					<Tablature
						dataA={this.state.jDataA.SECTION_CONTENT[7]}
					/>
					<SharpsAndFlatsRevisited
						dataA={this.state.jDataA.SECTION_CONTENT[8]}
					/>
					<MajorScales
						dataA={this.state.jDataA.SECTION_CONTENT[9]}
					/>
					<ScaleFinder
						dataA={this.state.jDataA.SECTION_CONTENT[10]}
						chordsA={this.state.jDataA.CHORDS_A}
					/>
					<DailyExercise
						dataA={this.state.jDataA.SECTION_CONTENT[11]}
					/>
					<Outroduction
						dataA={this.state.jDataA.SECTION_CONTENT[12]}
					/>
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div id={'appContainer'} className={this.state.className}>
				{jsx}
			</div>
		);
	}
}

export default Base;