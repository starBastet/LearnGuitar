import React, {Component} from 'react';
import './MeasureManager.css';
import Measure from './Measure';


class MeasureManager extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			
		};
		
		this.tabDataA = this.props.tabDataA;
		
		this.measureW = 150;
		this.stringDist = 10;
		
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		
	}
	
	compileJsx()
	{
		var jsxA = [];
		for (var i=0;i<this.tabDataA.length;i++)
		{
			var numCoordsA = [];
			for (var j=0;j<this.tabDataA[i].length;j++)
			{
				//var X = (this.measureW / this.notesA[i].length) * (j+.3);
				var X = (this.measureW / 4) * (j+.3);
				var Y = ((this.stringDist*(this.tabDataA[i][j][0]-1)) + this.tabDataA[i][j][0]) - 8;
				numCoordsA.push({N:this.tabDataA[i][j][1],X:X,Y:Y});
			}
			
			var measureJsx = <Measure
								measureW={this.measureW}
								stringDist={this.stringDist}
							 	numCoordsA={numCoordsA}
								measureNum={i}
								key={'measure'+i}
							 />;
			
			jsxA.push(measureJsx);
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
			<div className={'measureManagerContainer'}>
				{jsx}
			</div>
		);
	}
}

export default MeasureManager;