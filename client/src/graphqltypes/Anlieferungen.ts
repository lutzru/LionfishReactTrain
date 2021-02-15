/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CollectionDeliveryState } from "./globalTypes";

// ====================================================
// GraphQL query operation: Anlieferungen
// ====================================================

export interface Anlieferungen_anlieferungen_artikel {
  __typename: "Artikel";
  name: string | null;
}

export interface Anlieferungen_anlieferungen_lieferant {
  __typename: "Lieferant";
  id: string;
  lieferantenNummer: number;
  name: string | null;
}

export interface Anlieferungen_anlieferungen {
  __typename: "Anlieferung";
  id: string;
  status: CollectionDeliveryState;
  artikel: Anlieferungen_anlieferungen_artikel;
  lieferant: Anlieferungen_anlieferungen_lieferant;
}

export interface Anlieferungen {
  anlieferungen: Anlieferungen_anlieferungen[];
}

export interface AnlieferungenVariables {
  status: CollectionDeliveryState[];
}
