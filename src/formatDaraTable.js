import { actions } from "../components/AccueilTable";
export const formatDataTable = (inputData) => {
    return inputData.map(item => {
      return {
        date: item.created_at.split(' ')[0], // Extract date from 'created_at'
        Culture: item.culture,
        variete: item.variety,
        'num de lot': item.batch_number,
        'number batche': item.N_batch,
        'date semis': item.date_semis,
        'Actual age': item.actual_age,
        'nombre de graines': item.origine_graines,
        'Plantes commandées': item.nbr_pltscommandes,
        'jour apres semis': item.days_after_sowing,
        'pourcentage germination': item.plants_and_total_and_deviation.nbr_plantA / item.origine_graines * 100, // Calculated percentage germination
        'pourcentage total': item.plants_and_total_and_deviation.nbr_total / item.origine_graines * 100, // Calculated total percentage
        deviation: item.plants_and_total_and_deviation.deviation,
        'numero de commande': item.order_number,
        client: item.client,
        fournisseur: item.supplier,
        action:actions
      };
    });
  };
  
