import { Band } from "../model/Band";
import BaseDataBase from "./BaseDatabase";

export class BandDatabase extends BaseDataBase {
  private static TABLE_NAME = "Tabela_Bandas";

  private toModel(dbModel?: any): Band | undefined {
    return (
      dbModel &&
      new Band(
        dbModel.id,
        dbModel.name,
        dbModel.music_genre,
        dbModel.responsible,
      )
    )
  }

  public async createBand(
    id: string,
    name: string,
    music_genre: string,
    responsible: string
  ): Promise<void> {
    try {
      await BaseDataBase.connection
        .insert({
          id,
          name,
          music_genre,
          responsible
        })
        .into(BandDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getBandDetails(input: any): Promise<any> {
    try {
      const result = await BaseDataBase.connection.raw(`
          SELECT * from ${BandDatabase.TABLE_NAME} WHERE id = '${input}' OR name = '${input}'
      `);
      return this.toModel( result[0][0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}