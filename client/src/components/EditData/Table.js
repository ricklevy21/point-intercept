import React, { Component } from 'react'
import MaterialTable from 'material-table'
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";
import moment from 'moment'

const Table = (props) => {
    console.log(props)
    return (
        <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            {
                title: 'date',
                field: 'date',
                render: rowData => moment(rowData.validated_at).format('MM/DD/YYYY')
            },
            {
                title: 'transect',
                field: 'transect'
            },
            {
                title: 'point',
                field: 'point'
            },
            {
                title: 'hit_one',
                field: 'hit_one'
            },
            {
                title: 'hit_two',
                field: 'hit_two',
                render: rowData => rowData.hit_two ? rowData.hit_two.join(', '): 'nooo'
            },
            {
                title: 'ground_surface',
                field: 'ground_surface'
            },
            {
                title: 'soil_moisture_percentage',
                field: 'soil_moisture_percentage'
            },
            {
                title: 'canopy_score',
                field: 'canopy_score'
            },
            {
                title: 'canopy_taxa',
                field: 'canopy_taxa',
                render: rowData => rowData.canopy_taxa ? rowData.canopy_taxa.join(', '): 'nooo'
            },
            {
                title: 'shrub_density_detail',
                field: 'shrub_density_detail'
            },
            {
                title: 'additionalSpecies',
                field: 'additionalSpecies',
                render: rowData => rowData.additionalSpecies ? rowData.additionalSpecies.join(', '): 'nooo'
            },
            {
                title: 'latitude',
                field: 'latitude'
            },
            {
                title: 'longitude',
                field: 'longitude'
            },
            {
                title: 'elevation',
                field: 'elevation'
            },
            {
                title: 'crew',
                field: 'crew'
            }
          ]}
            data={props.data}
            title={props.project}
        />
      </div>
      )

}

export default Table