import { Injectable } from '@nestjs/common';
import * as PubNub from 'pubnub'

@Injectable()
export class PubNubService extends PubNub {}
