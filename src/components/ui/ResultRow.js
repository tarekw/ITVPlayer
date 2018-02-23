import { PropTypes } from 'react'

const ResultRow = ({ Programme={} }) =>
    <div>
      <table className="table table-bordered table-hover">
          <tr>
              <td><img className="img-rounded" src={Programme.ImageUri}/></td>
              <td>
                  <b>{Programme.Programme.Title}</b>
                  <div>{Programme.ShortSynopsis}</div>
              </td>
          </tr>
      </table>
    </div>

ResultRow.propTypes = {
    Programme: PropTypes.object.isRequired
}

export default ResultRow
