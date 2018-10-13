import React, {Component} from 'react';
//import './MajorScales.css';
import ScaleManager from './../scale/ScaleManager';


class MajorScales extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			
		};
		
		this.dataA = this.props.dataA;
		
		this.scaleDataA = [];
		this.fretNum = 0;
		
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		var chosenFingering = 0;
		this.fretNum = this.dataA.SCALE_DATA_A[0][chosenFingering];
		var stringArr = [];
		for (var i=0;i<this.dataA.SCALE_FINGERINGS_A[chosenFingering].length;i++)
		{
			var fretsArr = [];
			for (var j=0;j<this.dataA.SCALE_FINGERINGS_A[chosenFingering][i].length;j++)
			{
				var n = Number(this.dataA.SCALE_FINGERINGS_A[chosenFingering][i][j]) + Number(this.dataA.SCALE_DATA_A[this.fretNum][chosenFingering]);
				n -= this.fretNum;
				fretsArr.push(n);
			}
			stringArr.push(fretsArr);
		}
		
		this.scaleDataA = stringArr;
	}
	
	componentDidMount()
	{
		
	}
	
	compileJsx()
	{
		var paragraphSplit = this.dataA.BLURBS_A[1].split('\n');
		var paragraphJsx = [];
		for (var i=0;i<paragraphSplit.length;i++)
		{
			var jsxP = <p key={'majorScaleP'+i}>
						{paragraphSplit[i]}<br/>
					   </p>;
			paragraphJsx.push(jsxP);
		}
		
		var jsx = <div>
					<p className={'titleText'}>
						{this.dataA.TITLE}
					</p>
					<div className={'blurbText'}>
						{this.dataA.BLURBS_A[0]}
					</div>
					<br/>
					
					<ScaleManager
						scaleDataA={this.scaleDataA}
						fretNum={this.fretNum}
					/>
					<br/>
					
					<div className={'blurbText'}>
						{paragraphJsx}
					</div>
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

export default MajorScales;