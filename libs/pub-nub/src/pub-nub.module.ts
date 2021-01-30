import { DynamicModule, Module, Provider } from '@nestjs/common';
import { PubNubService } from './pub-nub.service';
import * as PubNub from 'pubnub'
import Pubnub from 'pubnub';

@Module({
  providers:[ {
    provide: PubNubService,
    useFactory: async (options: Pubnub.Config) => {
      return new PubNub(options);
    },
    inject: ['CONFIG_OPTIONS'],
  }],
  exports: [PubNubService],
})
export class PubNubModule  {
  static register(options: PubNub.Config): DynamicModule {
    return {
      module: PubNubModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
      ],
    };
  }

}
