import React, {Component} from 'react';
//import './Tablature.css';
import TablatureManager from './../tablature/TablatureManager';


class Tablature extends Component
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
		var paragraphSplit = this.dataA.BLURBS_A[0].split('\n');
		var paragraphJsx = [];
		for (var i=0;i<paragraphSplit.length;i++)
		{
			var jsxP = <p key={'tablatureP'+i}>
						{paragraphSplit[i]}<br/>
					   </p>;
			paragraphJsx.push(jsxP);
		}
		
		var jsx = <div>
					<p className={'titleText'}>
						{this.dataA.TITLE}
					</p>
					<br/>
					
					<TablatureManager
						tabDataA={this.dataA.TABLATURE_DATA_A}
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

export default Tablature;