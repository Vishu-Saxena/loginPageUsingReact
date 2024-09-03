import React from 'react'

const Home = () => {
  return (
    <div className='container border'>
        <h4 className='text-center mt-5 text-primary'> Here's is the list of all users </h4>
        <div className="row mt-3">
            <div style={{"margin" : "auto"}} className="col-sm-10 border">

           
      <table class="table border text-center table-striped">
            <thead>
                <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
    </div>
  )
}

export default Home
