import fr from "./fr.json";

export type Messages = typeof fr;

// Locale unique pour l'instant ; le routage [locale] arrive avec l'étape 2.
export function getMessages(): Messages {
  return fr;
}
