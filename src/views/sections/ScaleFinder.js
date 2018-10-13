import React, {Component} from 'react';
//import './MajorScales.css';
import ChordList from './../chordList/ChordList';
import ScaleManager from './../scale/ScaleManager';


class ScaleFinder extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			chordNum:2,
			chordShiftNum:1,
			chosenFingeringNum:0
		};
		
		this.dataA = this.props.dataA;
		this.chordsA = this.props.chordsA;
		this.chordNamesA = this.chordsA.map(function(elem){return elem.NAME});
		
		this.scaleDataA = [];
		this.fretNum = 0;
		this.fretNumModifier = 0;
		
		this.chordNameClicked = this.chordNameClicked.bind(this);
		this.chordShiftClicked = this.chordShiftClicked.bind(this);
		this.scaleFingeringClicked = this.scaleFingeringClicked.bind(this);
		this.discernKey = this.discernKey.bind(this);
		this.compileScaleDataA = this.compileScaleDataA.bind(this);
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
			this.discernKey(num,this.state.chordShiftNum,this.state.chosenFingeringNum);
		}
	}
	
	chordShiftClicked(newShift)
	{
		if (newShift !== this.state.chordShiftNum)
		{
			this.discernKey(this.state.chordNum,newShift,this.state.chosenFingeringNum);
		}
	}
	
	scaleFingeringClicked(newFingeringNum)
	{
		if (newFingeringNum !== this.state.chosenFingeringNum)
		{
			this.discernKey(this.state.chordNum,this.state.chordShiftNum,newFingeringNum);
		}
	}
	
	discernKey(chordNum,chordShiftNum,fingeringNum)
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
		
		this.fretNum = this.dataA.SCALE_DATA_A[chordNum][fingeringNum];
		this.fretNumModifier = 0;
		if (chordShiftNum === 0)
		{
			this.fretNumModifier -= 1;
		}
		else if (chordShiftNum === 2)
		{
			this.fretNumModifier += 1;
		}
		else
		{
			this.fretNumModifier = 0;
		}
		
		//this.compileScaleDataA();
		
		this.setState(
		{
			chordNum:chordNum,
			chordShiftNum:chordShiftNum,
			chosenFingeringNum:fingeringNum
		});
	}
	
	compileScaleDataA()
	{
		this.scaleDataA = [];
		var stringArr = [];
		for (var i=0;i<this.dataA.SCALE_FINGERINGS_A[this.state.chosenFingeringNum].length;i++)
		{
			var fretsArr = [];
			for (var j=0;j<this.dataA.SCALE_FINGERINGS_A[this.state.chosenFingeringNum][i].length;j++)
			{
				var fretModifier = this.dataA.SCALE_DATA_A[this.state.chordNum][this.state.chosenFingeringNum] + this.fretNumModifier;
				var n = this.dataA.SCALE_FINGERINGS_A[this.state.chosenFingeringNum][i][j] + fretModifier;
				n -= this.fretNum + this.fretNumModifier;
				fretsArr.push(n);
			}
			stringArr.push(fretsArr);
		}
		
		this.scaleDataA = stringArr;
	}
	
	compileJsx()
	{
		this.compileScaleDataA();
		
		/*var paragraphSplit = this.dataA.BLURBS_A[1].split('\n');
		var paragraphJsx = [];
		for (var i=0;i<paragraphSplit.length;i++)
		{
			var jsxP = <p key={'majorScaleP'+i}>
						{paragraphSplit[i]}<br/>
					   </p>;
			paragraphJsx.push(jsxP);
		}*/
		
		var jsx = <div>
					<p className={'titleText'}>
						{this.dataA.TITLE}
					</p>
					<div className={'blurbText'}>
						{this.dataA.BLURBS_A[0]}
					</div>
					<br/>
					
					
					<ChordList
						chordNamesA={this.chordNamesA}
						chordTypesA={null}
						activeChordNum={this.state.chordNum}
						activeShiftNum={this.state.chordShiftNum}
						activeFingeringNum={this.state.chosenFingeringNum}
						clickChordCallback={this.chordNameClicked}
						clickTypeCallback={null}
						clickShiftCallback={this.chordShiftClicked}
						clickFingeringCallback={this.scaleFingeringClicked}
					/>
					<br/>
					
					
					
					
					<ScaleManager
						scaleDataA={this.scaleDataA}
						fretNum={this.fretNum + this.fretNumModifier}
					/>
					<br/>
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

export default ScaleFinder;