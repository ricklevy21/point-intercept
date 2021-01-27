import React, { Component } from 'react'
import MaterialTable from 'material-table'
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";

const Table = (props) => {

    return (
        <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'transect', field: 'transect' },
            { title: 'date', field: 'date' },
            { title: 'latitude', field: 'latitude'},
            { title: 'longitude', field: 'longitude'},
            { title: 'elevation', field: 'elevation'},
            { title: 'crew', field: 'crew'},
            { title: 'additionalSpecies', field: 'additionalSpecies'},
            { title: 'point', field: 'point'},
            { title: 'ground_surface', field: 'ground_surface'},
            { title: 'soil_moisture_percentage', field: 'soil_moisture_percentage'},
            { title: 'shrub_density_detail', field: 'shrub_density_detail'},
            { title: 'canopy_score', field: 'canopy_score'},
            { title: 'canopy_taxa', field: 'canopy_taxa'},
            { title: 'hit_one', field: 'hit_one'},
            { title: 'hit_two', field: 'hit_two'}

          ]}
        //   data={}
          title={props.project}
        />
      </div>
      )

}

export default Table