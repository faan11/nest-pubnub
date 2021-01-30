
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import Pubnub, * as PubNub from 'pubnub';

export type PubNubModuleOptions = Pubnub.PubnubConfig

export interface PubNubOptionsFactory {
  createAgendaOptions(): Promise<PubNubModuleOptions> | PubNubModuleOptions;
}

export interface PubNubModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<PubNubOptionsFactory>;
  useClass?: Type<PubNubOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<PubNubModuleOptions> | PubNubModuleOptions;
  inject?: any[];
}