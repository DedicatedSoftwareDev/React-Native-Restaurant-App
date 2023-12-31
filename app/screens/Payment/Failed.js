import React, { Component } from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';


import RoundButton from '../../base_components/RoundButton';
import Assets from '../../../src/constants/assets';
import AppBase from '../../base_components/AppBase';
import PrimaryText from '../../base_components/PrimaryText';

const ImageSection = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Divider = styled.View`
  width: 80%;
  margin: 30px auto 10px auto;
  border-bottom-width: 1px;
  border-bottom-color: #E0E2E5;
`;

const ErrorText = styled.Text`
  color: #D32121;
  font-size: 20px;
  text-align: center;
  margin: 20px auto;
`;

const PriceText = styled.Text`
  font-size: 40px;
  color: #213052;
  text-align: center;
`;

const CentText = PriceText.extend`
  font-size: 25px;
`;

const Currency = styled.Text`
  font-size: 24px;
  margin: 0 5px;
  color: #99AAC6;
`;

class PaymentFailed extends Component {
  static navigationOptions = {
    title: (<PrimaryText style={{ flex: 1 }}>Payment Complete</PrimaryText>),
    headerLeft: null,
  };

  render() {
    const { totalAmount } = this.props;
    let rupee = `${totalAmount}`;
    let paise = '00';
    if (totalAmount.includes('.')) {
      rupee = (`${totalAmount}`).split('.')[0];
      try {
        paise = (`${totalAmount}`).split('.')[1].padEnd(2, '0') || '00';
      } catch (e) {
        paise = '00';
      }
    }

    return (
      <AppBase
        style={{
          backgroundColor: '#ffffff',
          justifyContent: 'space-evenly',
        }}
      >
        <ImageSection>
          <ErrorText>Payment Failed!</ErrorText>
          <Image
            style={{
              width: 120,
              height: 120,
            }}
            resizeMode="contain"
            source={Assets.Images.paymentFailed}
          />

          <ErrorText>Your payment has been approved!</ErrorText>
          <Divider />
        </ImageSection>

        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Currency>₹</Currency>
          <PriceText>{rupee}<CentText>.{paise}</CentText></PriceText>
        </View>

        <RoundButton
          outline
          outlineColor="#777777"
          title="Go to Home."
          onPress={() => {
            Actions.reset('homeScreen');
          }}
        />
      </AppBase>
    );
  }
}

PaymentFailed.propTypes = {
  totalAmount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default PaymentFailed;
