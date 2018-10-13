import React, {Component} from 'react';
//import './ChordDiagramsSection.css';
import ChordDiagram from './../chordDiagram/diagram/ChordDiagram';


class ChordDiagrams extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			
		};
		
		this.dataA = this.props.dataA;
		this.chordDataA = this.props.chordDataA;
		this.chordLabel = this.props.chordLabel;
		
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
		var paragraphSplit = this.dataA.BLURBS_A[1].split('\n');
		var paragraphJsx = [];
		for (var i=0;i<paragraphSplit.length;i++)
		{
			var jsxP = <p key={'chordDiagramsP'+i}>
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
					<ChordDiagram
						cellSide={30}
						chordDataA={this.chordDataA}
						chordLabel={this.chordLabel}
					/>
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

export default ChordDiagrams;