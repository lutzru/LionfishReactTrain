import gql from 'graphql-tag'

export default gql`
    query Anlieferungen($status: [CollectionDeliveryState!]!, $searchTerm: String) {
        anlieferungen(status: $status, searchTerm: $searchTerm) {
            id
            status
            artikel {
                name
            }
            lieferant {
                id
                lieferantenNummer
                name
            }
        }
    }
`

/*



http://localhost:4000/graphql

GraphQL:
# Write your query or mutation here
{
  anlieferungen {
    id,lieferant{id,lieferantenNummer}
  }
}


# Write your query or mutation here
{
  anlieferungen(searchTerm: "noch") {
    id
    lieferant {
      id
      lieferantenNummer
      name
    }
    artikel {
      name
    }
  }
}


# Write your query or mutation here
{
  anlieferungen(searchTerm: "") {
    id
    lieferant {
      id
      lieferantenNummer
      name
    }
    artikel {
      name
    }
  }
   anlieferung(id:"125") {
    id
    lieferant {
      id
      lieferantenNummer
      name
    }
    artikel {
      name
    }
  }
}


{
  anlieferungen(status: [OFFEN, FERTIG]) {
    id
    status
  }
}
# Write your query or mutation here


{
  anlieferungen(status: [OFFEN, FERTIG],searchTerm:"noch") {
    id
    status,
    lieferant{name},
    artikel{articleNumber,name}
  }
}

*/
