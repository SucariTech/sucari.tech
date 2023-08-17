import React from 'react'

/* Config */
import config from '@config'

/* Hooks */
import { useContent } from '@contexts'

/* Styles */
import { NetworkList, Network, NetworkLink } from '../shared/styles'

import * as SC from './styles'

const Footer: React.FC = () => {
  const { footer } = useContent()
  return (
    <SC.Footer>
      <SC.TextLine data-effect="fade-in">
        {footer.textLine.map((part: any, index: number) =>
          part.to ? (
            <SC.FooterLink key={index} to={part.to}>
              {part.label}
            </SC.FooterLink>
          ) : (
            part.label
          ),
        )}
      </SC.TextLine>
      <NetworkList data-effect="fade-in">
        {config.networks.map((network: any, index: number) => (
          <Network key={index}>
            <NetworkLink
              aria-label={network.label}
              href={network.to}
              rel="noreferrer"
              target="_blank"
            >
              <network.icon />
            </NetworkLink>
          </Network>
        ))}
      </NetworkList>
    </SC.Footer>
  )
}

export default Footer
