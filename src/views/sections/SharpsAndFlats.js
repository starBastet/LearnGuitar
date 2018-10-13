import React, {Component} from 'react';
//import './SharpsAndFlats.css';


class SharpsAndFlats extends Component
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
		var paragraphSplitFlat = this.dataA.BLURBS_A[0].split('\fl');
		var paragraphSplitNatural = paragraphSplitFlat[1].split('\na');
		var paragraphSplitSharp = paragraphSplitNatural[1].split('\rp');
		var paragraphSplitsA = [paragraphSplitFlat[0],paragraphSplitNatural[0],paragraphSplitSharp[0],paragraphSplitSharp[1]];
		
		var flatSharpParagraphJsx = <p>
										{paragraphSplitsA[0]}&#9837;{paragraphSplitsA[1]}&#9838;{paragraphSplitsA[2]}&#x266f;{paragraphSplitsA[3]}
								   </p>
		
		var jsx = <div>
					<p className={'titleText'}>
						{this.dataA.TITLE}
					</p>
					<div className={'blurbText'}>
						{flatSharpParagraphJsx}
					</div>
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

export default SharpsAndFlats;