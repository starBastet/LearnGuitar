import React, {Component} from 'react';

import ChordList from './../chordList/ChordList';
import ChordDiagram from './../chordDiagram/diagram/ChordDiagram';

// ADMITTEDLY, THIS CLASS IS PRETTY CLOSE TO THE KeyChordFinder CLASS, BUT THE CONTENT IS DIFFERENT.
// THEY SHOULD PERHAPS BE COMBINED, OR HAVE ANOTHER CLASS DO THE DUPLICATED WORK. I'LL COME BACK TO THAT.

class KeyChordRandomizer extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			chordNum:-1,
			chordShiftNum:1
		};
		
		this.dataA = this.props.dataA;
		this.chordsA = this.props.chordsA;
		this.chordNamesA = this.chordsA.map(function(elem){return elem.NAME});
		this.chordTypesA = this.props.chordTypesA;
		
		this.chordTypeSpectrumA = ['MAJOR','MINOR','MINOR','MAJOR','MAJOR','MINOR','DIMINISHED'];
		this.keyChordsA = [];
		
		this.chordNameClicked = this.chordNameClicked.bind(this);
		this.chordShiftClicked = this.chordShiftClicked.bind(this);
		this.discernKey = this.discernKey.bind(this);
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		//console.log('&#9837; &#9838; &#x266f;');
	}
	
	chordNameClicked(num)
	{
		this.discernKey(num,this.state.chordShiftNum);
	}
	
	chordShiftClicked(newShift)
	{
		if (newShift !== this.state.chordShiftNum)
		{
			this.discernKey(this.state.chordNum,newShift);
		}
	}
	
	discernKey(chordNum,chordShiftNum)
	{
		// TRANSPOSE THE IRRATIONAL KEYS:
		if (chordNum === 0 && chordShiftNum === 2)
		{
			chordNum = 1;
			chordShiftNum = 0;
		}
		else if (chordNum === 1 && chordShiftNum === 2)
		{
			chordNum = 2;
			chordShiftNum = 1;
		}
		else if (chordNum === 2 && chordShiftNum === 0)
		{
			chordNum = 1;
			chordShiftNum = 1;
		}
		else if (chordNum === 3 && chordShiftNum === 2)
		{
			chordNum = 4;
			chordShiftNum = 0;
		}
		else if (chordNum === 4 && chordShiftNum === 2)
		{
			chordNum = 5;
			chordShiftNum = 1;
		}
		else if (chordNum === 5 && chordShiftNum === 0)
		{
			chordNum = 4;
			chordShiftNum = 1;
		}
		else if (chordNum === 6 && chordShiftNum === 2)
		{
			chordNum = 0;
			chordShiftNum = 0;
		}
		
		
		this.keyChordsA = [];
		var arr = [];
		
		var newChordNum = chordNum;
		var newShiftNum = chordShiftNum;
		
		for (var i=0;i<7;i++)
		{
			var chordA = [newChordNum];
			var shiftStr = 'NATURAL';
			if (i === 3)
			{
				newShiftNum -= 1;
			}
			
			if (i > 0 && (this.chordsA[newChordNum].NAME === 'C' || this.chordsA[newChordNum].NAME === 'F'))
			{
				newShiftNum += 1;
			}
			
			if (newShiftNum === 0)
			{
				shiftStr = 'FLAT';
			}
			else if (newShiftNum === 2)
			{
				shiftStr = 'SHARP';
			}
			else
			{
				shiftStr = 'NATURAL';
			}
			
			chordA.push(shiftStr,this.chordTypeSpectrumA[i]);
			arr.push(chordA);
			
			newChordNum++;
			if (newChordNum > this.chordsA.length-1)
			{
				newChordNum = 0;
			}
		}
		
		var chordNumsA = [0,1,2,3,4,5];
		var randomChordsA = [];
		for (var j=0;j<4;j++)
		{
			var randN = Math.round(Math.random() * (chordNumsA.length-1));
			var randChord = arr[chordNumsA[randN]];
			randomChordsA.push(randChord);
			chordNumsA.splice(randN,1);
		}
		
		this.keyChordsA = randomChordsA;
		
		this.setState(
		{
			chordNum:chordNum,
			chordShiftNum:chordShiftNum
		});
	}
	
	compileJsx()
	{
		var jsxA = [];
		if (this.keyChordsA.length > 0)
		{
			for (var i=0;i<this.keyChordsA.length;i++)
			{
				var shiftSymbol = '';
				if (this.keyChordsA[i][1] === 'FLAT')
				{
					shiftSymbol = '&#9837;';
				}
				else if (this.keyChordsA[i][1] === 'SHARP')
				{
					shiftSymbol = '&#x266f;';
				}
				
				var jsxP = <ChordDiagram
							cellSide={20}
							chordDataA={this.chordsA[this.keyChordsA[i][0]].MARKERS[this.keyChordsA[i][1]][this.keyChordsA[i][2]]}
							chordLabel={this.chordNamesA[this.keyChordsA[i][0]]+shiftSymbol+' '+this.keyChordsA[i][2].toLowerCase()}
							key={'keyChordFinderChord'+i}
							displayInline={true}
						  />
						  
				jsxA.push(jsxP);
			}
		}
		
		var jsx = <div>
					<p className={'titleText'}>
						{this.dataA.TITLE}
					</p>
					<div className={'blurbText'}>
						{this.dataA.BLURBS_A[0]}
					</div>
					
					
					<ChordList
						chordNamesA={this.chordNamesA}
						chordTypesA={null}
						activeChordNum={this.state.chordNum}
						activeShiftNum={this.state.chordShiftNum}
						clickChordCallback={this.chordNameClicked}
						clickTypeCallback={null}
						clickShiftCallback={this.chordShiftClicked}
						clickFingeringCallback={null}
					/>
					<br/>
					<br/>
					
					<div style={{textAlign:'center'}}>
					{jsxA}
					</div>
					<p className={'blurbText'}>
						{this.dataA.BLURBS_A[1]}
					</p>
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'sectionContainer'}>
				{jsx}
			</div>
		);
	}
}

export default KeyChordRandomizer;