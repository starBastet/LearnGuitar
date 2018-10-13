import React, {Component} from 'react';
import './ChordList.css';
import ChordListItem from './ChordListItem';
import ChordTypeList from './chordTypeList/ChordTypeList';
import ChordShiftList from './chordShiftList/ChordShiftList';
import ScaleFingeringList from './scaleFingeringList/ScaleFingeringList';


class ChordList extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			activeChordNum:this.props.activeChordNum,
			activeTypeNum:this.props.activeTypeNum,
			activeShiftNum:this.props.activeShiftNum,
			activeFingeringNum:this.props.activeFingeringNum
		};
		
		this.chordNamesA = this.props.chordNamesA;
		this.chordTypesA = this.props.chordTypesA;
		this.clickChordCallback = this.props.clickChordCallback;
		this.clickTypeCallback = this.props.clickTypeCallback;
		this.clickShiftCallback = this.props.clickShiftCallback;
		this.clickFingeringCallback = this.props.clickFingeringCallback;
		
		this.chordNameClicked = this.chordNameClicked.bind(this);
		this.chordTypeClicked = this.chordTypeClicked.bind(this);
		this.chordShiftClicked = this.chordShiftClicked.bind(this);
		this.scaleFingeringClicked = this.scaleFingeringClicked.bind(this);
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		
	}
	
	componentWillReceiveProps(newProps)
	{
		if (newProps.activeChordNum !== this.state.activeChordNum)
		{
			this.setState(
			{
				activeChordNum:newProps.activeChordNum
			});
		}
		
		if ((newProps.activeTypetNum !== this.state.activeTypetNum))
		{
			this.setState(
			{
				activeTypetNum:newProps.activeTypetNum
			});
		}
		
		if ((newProps.activeShiftNum !== this.state.activeShiftNum))
		{
			this.setState(
			{
				activeShiftNum:newProps.activeShiftNum
			});
		}
		
		if ((newProps.activeFingeringNum !== this.state.activeFingeringNum))
		{
			this.setState(
			{
				activeFingeringNum:newProps.activeFingeringNum
			});
		}
	}
	
	chordNameClicked(num)
	{
		/*if (num !== this.state.activeChordNum)
		{
			this.setState(
			{
				activeChordNum:num
			});
		}*/
		
		this.clickChordCallback(num);
	}
	
	chordTypeClicked(type)
	{
		var newTypeNum = 0;
		if (type.toUpperCase() === 'MINOR')
		{
			newTypeNum = 1;
		}
		
		if (newTypeNum !== this.state.activeTypeNum)
		{
			this.setState(
			{
				activeTypeNum:newTypeNum
			});
		}
		
		this.clickTypeCallback(type);
	}
	
	chordShiftClicked(newShift)
	{
		if (this.state.activeChordNum < 0)
		{
			return;
		}
		
		/*if (newShift !== this.state.activeShiftNum)
		{
			this.setState(
			{
				activeShiftNum:newShift
			});
		}*/
		
		this.clickShiftCallback(newShift);
	}
	
	scaleFingeringClicked(num)
	{
		this.clickFingeringCallback(num);
	}
	
	compileJsx()
	{
		var jsxA = [];
		
		for (var i=0;i<this.chordNamesA.length;i++)
		{
			var isActive = i === this.state.activeChordNum ? true : false;
			var jsxP = <ChordListItem
						chordName={this.chordNamesA[i]}
						chordNum={i}
						isActive={isActive}
						clickChordCallback={this.chordNameClicked}
						key={'chordListItem'+i}
					  />;
			
			jsxA.push(jsxP);
		}
		
		var chordTypeListJsx = null;
		var chordShiftListJsx = null;
		var scaleFingeringListJsx = null;
		
		if (this.clickTypeCallback !== null)
		{
			chordTypeListJsx = <ChordTypeList
								chordTypesA={this.chordTypesA}
								activeTypeNum={this.state.activeTypeNum}
								clickTypeCallback={this.chordTypeClicked}
							  />
		}
		
		if (this.clickShiftCallback !== null)
		{
			chordShiftListJsx = <ChordShiftList
								activeShiftNum={this.state.activeShiftNum}
								clickShiftCallback={this.chordShiftClicked}
							  />
		}
		
		if (this.clickFingeringCallback !== null)
		{
			scaleFingeringListJsx = <ScaleFingeringList
								activeFingeringNum={this.state.activeFingeringNum}
								clickFingeringCallback={this.scaleFingeringClicked}
							  />
		}
		
		
		var jsx = <div>
					{jsxA}
					<br/>
					{chordTypeListJsx}
					{chordShiftListJsx}
					{scaleFingeringListJsx}
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'chordListContainer'}>
				{jsx}
			</div>
		);
	}
}

export default ChordList;