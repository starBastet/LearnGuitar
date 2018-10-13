import React, {Component} from 'react';
//import './SharpsAndFlatsRevisited.css';
import TablatureManager from './../tablature/TablatureManager';


class SharpsAndFlatsRevisited extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			
		};
		
		this.dataA = this.props.dataA;
		
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
		for (var i=0;i<3;i++)
		{
			var blurb = <p>{this.dataA.BLURBS_A[i]}</p>;
			if (i === 1)
			{
				var flatSplitA = this.dataA.BLURBS_A[i].split('\fl');
				blurb = <p>{flatSplitA[0]}&#9837;{flatSplitA[1]}</p>;
			}
			else if (i === 2)
			{
				var sharpSplitA = this.dataA.BLURBS_A[i].split('\rp');
				blurb = <p>{sharpSplitA[0]}&#x266f;{sharpSplitA[1]}</p>;
			}
			
			var jsxP = <div key={'tabSampleP'+i}>
					  	<div className={'blurbText'}>
							{blurb}
						</div>
						<br/>
						<TablatureManager
							tabDataA={this.dataA.TABLATURE_DATA_A[i]}
						/>
					   </div>
			
			jsxA.push(jsxP);
		}
		
		
		
		var paragraphSplitFlat = this.dataA.BLURBS_A[4].split('\fl');
		var paragraphSplitSharp = paragraphSplitFlat[1].split('\rp');
		var paragraphSplitsA = [paragraphSplitFlat[0],paragraphSplitSharp[0],paragraphSplitSharp[1]];
		
		var flatSharpParagraphJsx = <p>
										{paragraphSplitsA[0]}&#9837;{paragraphSplitsA[1]}&#x266f;{paragraphSplitsA[2]}
								   </p>
		
		var jsx = <div>
					<p className={'titleText'}>
						{this.dataA.TITLE}
					</p>
					
					{jsxA}
					
					<div className={'blurbText'}>
						{this.dataA.BLURBS_A[3]}
					</div>
					<br/>
					
					<div className={'blurbText'}>
						{flatSharpParagraphJsx}
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

export default SharpsAndFlatsRevisited;