import React, {Component} from 'react';
import './Measure.css';


class Measure extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			
		};
		
		this.numCoordsA = this.props.numCoordsA;
		this.measureW = this.props.measureW;
		this.stringDist = this.props.stringDist;
		this.measureNum = this.props.measureNum;
		
		this.measureBox = null;
		
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		//this.measureBox.style.height = (this.stringDist * 6) + 'px';
	}
	
	compileJsx()
	{
		var tabStringsA = [];
		for (var i=0;i<6;i++)
		{
			var stringJsx = <div 
								className={'tabString'} 
								style={{width:this.measureW+'px',marginBottom:this.stringDist+'px'}}
								key={'tabString'+i} 
							>
						   </div>
			tabStringsA.push(stringJsx);
		}
		
		var tabNumsA = [];
		for (var j=0;j<this.numCoordsA.length;j++)
		{
			var X = this.numCoordsA[j].X;
			var Y = this.numCoordsA[j].Y;
			var N = this.numCoordsA[j].N;
			
			var numJsx = <div
							className={'tabNum'}
							style={{left:X+'px',top:Y+'px'}}
							key={String(this.measureNum)+'tabNum'+j}
						>
						{N}
						</div>
			
			tabNumsA.push(numJsx);
		}
		
		var jsx = <div>
					<div
						className={'measureBox'}
						style={{width:this.measureW+'px'}}
						ref={(elem)=>this.measureBox=elem}
					>
						{tabStringsA}
						{tabNumsA}
					</div>
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'measureContainer'}>
				{jsx}
			</div>
		);
	}
}

export default Measure;