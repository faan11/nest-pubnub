import { DynamicModule, Module, Provider } from '@nestjs/common';
import Pubnub from 'pubnub';
import { PubNubService } from './pub-nub.service';

@Module({
  providers:[ {
    provide: PubNubService,
    useFactory: async (options: Pubnub.PubnubConfig) => {
      return new Pubnub(options);
    },
    inject: ['CONFIG_OPTIONS'],
  }],
  exports: [PubNubService],
})
export class PubNubModule  {
  static register(options: Pubnub.PubnubConfig): DynamicModule {
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
