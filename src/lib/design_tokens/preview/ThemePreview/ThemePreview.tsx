import { useTheme } from "styled-components";
import ColorRow from "../shared/ColorRow/ColorRow";
import StyleTable, {
  StyleGroupBody,
  StyleGroupHeader,
} from "../shared/StyleTable/StyleTable";

const ThemePreview = () => {
  const { vars } = useTheme();
  return (
    <StyleTable>
      <StyleGroupHeader
        title="Trainual"
        description="Trainual specific colors that do not vary with branding"
      />
      <StyleGroupBody>
        <ColorRow hex={vars.trainualPurple} text="trainual-purple" />
      </StyleGroupBody>

      <StyleGroupHeader title="State" description="Critical UI States" />
      <StyleGroupBody>
        <ColorRow hex={vars.stateInfo} text="state-info" />
        <ColorRow hex={vars.stateInfoBackground} text="state-info-background" />
        <ColorRow hex={vars.stateInfoHover} text="state-info-hover" />
        <ColorRow hex={vars.stateError} text="state-error" />
        <ColorRow
          hex={vars.stateErrorBackground}
          text="state-error-background"
        />
        <ColorRow hex={vars.stateErrorHover} text="state-error-hover" />
        <ColorRow hex={vars.stateCaution} text="state-caution" />
        <ColorRow
          hex={vars.stateCautionBackground}
          text="state-caution-background"
        />
        <ColorRow hex={vars.stateCautionHover} text="state-caution-hover" />
        <ColorRow hex={vars.stateSuccess} text="state-success" />
        <ColorRow
          hex={vars.stateSuccessBackground}
          text="state-success-background"
        />
        <ColorRow hex={vars.stateSuccessHover} text="state-success-hover" />
        <ColorRow hex={vars.stateFavorite} text="state-info" />
      </StyleGroupBody>

      <StyleGroupHeader
        title="Progress"
        description="Colors used to indicate progress"
      />
      <StyleGroupBody>
        <ColorRow hex={vars.progressColorBad} text="progress-color-bad" />
        <ColorRow
          hex={vars.progressColorAcceptable}
          text="progress-color-acceptable"
        />
        <ColorRow hex={vars.progressColorFair} text="progress-color-fair" />
        <ColorRow hex={vars.progressColorGood} text="progress-color-good" />
      </StyleGroupBody>

      <StyleGroupHeader
        title="Foundation"
        description="Backgrounds, modals, elevated surfaces, icon backgrounds, menu items"
      />
      <StyleGroupBody>
        <ColorRow hex={vars.foundationBase1} text="foundation-base-1" />
        <ColorRow hex={vars.foundationBase2} text="foundation-base-2" />
        <ColorRow hex={vars.foundationSurface1} text="foundation-surface-1" />
        <ColorRow hex={vars.foundationSurface2} text="foundation-surface-2" />
        <ColorRow hex={vars.foundationSurface3} text="foundation-surface-3" />
        <ColorRow hex={vars.foundationSurface4} text="foundation-surface-4" />
        <ColorRow hex={vars.foundationHover} text="foundation-hover" />
      </StyleGroupBody>

      <StyleGroupHeader title="Icon" />
      <StyleGroupBody>
        <ColorRow hex={vars.icon1} text="icon-1" />
        <ColorRow hex={vars.icon2} text="icon-2" />
        <ColorRow hex={vars.iconOverdue} text="icon-overdue" />
        <ColorRow hex={vars.iconActive} text="icon-active" />
      </StyleGroupBody>

      <StyleGroupHeader
        title="Text"
        description="Text colors that do not use branding"
      />
      <StyleGroupBody>
        <ColorRow hex={vars.textDefault} text="text-default" />
        <ColorRow hex={vars.textSubdued} text="text-subdued" />
        <ColorRow hex={vars.textPlaceholder} text="text-placeholder" />
        <ColorRow hex={vars.textSurface} text="text-surface" />
        <ColorRow hex={vars.textActiveVibrant} text="text-active-vibrant" />
        <ColorRow hex={vars.textHoverVibrant} text="text-hover-vibrant" />
        <ColorRow hex={vars.textDisabled} text="text-disabled" />
      </StyleGroupBody>

      <StyleGroupHeader
        title="Border"
        description="Inputs, surfaces, modals, etc"
      />
      <StyleGroupBody>
        <ColorRow hex={vars.borderDefault} text="border-default" />
        <ColorRow hex={vars.borderSurface1} text="border-surface-1" />
        <ColorRow hex={vars.borderSurface2} text="border-surface-2" />
        <ColorRow hex={vars.borderSurface3} text="border-surface-3" />
        <ColorRow hex={vars.borderHover} text="border-hover" />
        <ColorRow hex={vars.borderActive} text="border-active" />
        <ColorRow hex={vars.borderDisabled} text="border-disabled" />
      </StyleGroupBody>

      <StyleGroupHeader
        title="Accent Primary"
        description="Primary button fills, etc"
      />
      <StyleGroupBody>
        <ColorRow
          hex={vars.accentPrimaryDefault}
          text="accent-primary-default"
        />
        <ColorRow hex={vars.accentPrimaryHover} text="accent-primary-hover" />
        <ColorRow
          hex={vars.accentPrimaryPressed}
          text="accent-primary-pressed"
        />
        <ColorRow
          hex={vars.accentPrimaryDisabled}
          text="accent-primary-disabled"
        />
      </StyleGroupBody>

      <StyleGroupHeader
        title="Accent Secondary"
        description="Secondary button fills, etc"
      />
      <StyleGroupBody>
        <ColorRow
          hex={vars.accentSecondaryDefault}
          text="accent-secondary-default"
        />
        <ColorRow
          hex={vars.accentSecondaryHover}
          text="accent-secondary-hover"
        />
        <ColorRow
          hex={vars.accentSecondaryPressed}
          text="accent-secondary-pressed"
        />
        <ColorRow
          hex={vars.accentSecondaryDisabled}
          text="accent-secondary-disabled"
        />
      </StyleGroupBody>

      <StyleGroupHeader title="Accent Border" />
      <StyleGroupBody>
        <ColorRow hex={vars.accentBorderDefault} text="accent-border-default" />
        <ColorRow hex={vars.accentBorderHover} text="accent-border-hover" />
        <ColorRow
          hex={vars.accentBorderDisabled}
          text="accent-border-disabled"
        />
      </StyleGroupBody>

      <StyleGroupHeader title="Accent Text" />
      <StyleGroupBody>
        <ColorRow
          hex={vars.accentTextPlaceholder}
          text="accent-text-placeholder"
        />
        <ColorRow hex={vars.accentTextDefault} text="accent-text-default" />
        <ColorRow hex={vars.accentTextHover} text="accent-text-hover" />
        <ColorRow hex={vars.accentTextActive} text="accent-text-active" />
        <ColorRow hex={vars.accentTextPressed} text="accent-text-pressed" />
        <ColorRow hex={vars.accentTextDisabled} text="accent-text-disabled" />
      </StyleGroupBody>

      <StyleGroupHeader title="Accent Toggle" />
      <StyleGroupBody>
        <ColorRow hex={vars.accentToggleOff} text="accent-toggle-off" />
        <ColorRow hex={vars.accentToggleOn} text="accent-toggle-on" />
        <ColorRow hex={vars.accentToggleDefault} text="accent-toggle-default" />
        <ColorRow hex={vars.accentToggleHover} text="accent-toggle-hover" />
        <ColorRow hex={vars.accentToggleActive} text="accent-toggle-active" />
        <ColorRow
          hex={vars.accentToggleActiveHover}
          text="accent-toggle-active-hover"
        />
        <ColorRow
          hex={vars.accentToggleDisabled}
          text="accent-toggle-disabled"
        />
      </StyleGroupBody>

      <StyleGroupHeader title="Badge" />
      <StyleGroupBody>
        <ColorRow hex={vars.badgeError} text="badge-error" />
        <ColorRow hex={vars.badgeCaution} text="badge-caution" />
        <ColorRow hex={vars.badgeSuccess} text="badge-success" />
        <ColorRow hex={vars.badgeInfo} text="badge-info" />
        <ColorRow hex={vars.badgeGeneral} text="badge-general" />
      </StyleGroupBody>

      <StyleGroupHeader title="Charts & Graphs" />
      <StyleGroupBody>
        <ColorRow hex={vars.chartOne00} text="chart-one-00" />
        <ColorRow hex={vars.chartOne05} text="chart-one-05" />
        <ColorRow hex={vars.chartOne10} text="chart-one-10" />
        <ColorRow hex={vars.chartOne15} text="chart-one-15" />
        <ColorRow hex={vars.chartOne20} text="chart-one-20" />
        <ColorRow hex={vars.chartOne30} text="chart-one-30" />
        <ColorRow hex={vars.chartOne40} text="chart-one-40" />
        <ColorRow hex={vars.chartOne50} text="chart-one-50" />
        <ColorRow hex={vars.chartOne60} text="chart-one-60" />
        <ColorRow hex={vars.chartOne70} text="chart-one-70" />
        <ColorRow hex={vars.chartOne80} text="chart-one-80" />
        <ColorRow hex={vars.chartOne90} text="chart-one-90" />

        <ColorRow hex={vars.chartTwo00} text="chart-two-00" />
        <ColorRow hex={vars.chartTwo05} text="chart-two-05" />
        <ColorRow hex={vars.chartTwo10} text="chart-two-10" />
        <ColorRow hex={vars.chartTwo15} text="chart-two-15" />
        <ColorRow hex={vars.chartTwo20} text="chart-two-20" />
        <ColorRow hex={vars.chartTwo30} text="chart-two-30" />
        <ColorRow hex={vars.chartTwo40} text="chart-two-40" />
        <ColorRow hex={vars.chartTwo50} text="chart-two-50" />
        <ColorRow hex={vars.chartTwo60} text="chart-two-60" />
        <ColorRow hex={vars.chartTwo70} text="chart-two-70" />
        <ColorRow hex={vars.chartTwo80} text="chart-two-80" />
        <ColorRow hex={vars.chartTwo90} text="chart-two-90" />

        <ColorRow hex={vars.chartThree00} text="chart-three-00" />
        <ColorRow hex={vars.chartThree05} text="chart-three-05" />
        <ColorRow hex={vars.chartThree10} text="chart-three-10" />
        <ColorRow hex={vars.chartThree15} text="chart-three-15" />
        <ColorRow hex={vars.chartThree20} text="chart-three-20" />
        <ColorRow hex={vars.chartThree30} text="chart-three-30" />
        <ColorRow hex={vars.chartThree40} text="chart-three-40" />
        <ColorRow hex={vars.chartThree50} text="chart-three-50" />
        <ColorRow hex={vars.chartThree60} text="chart-three-60" />
        <ColorRow hex={vars.chartThree70} text="chart-three-70" />
        <ColorRow hex={vars.chartThree80} text="chart-three-80" />
        <ColorRow hex={vars.chartThree90} text="chart-three-90" />

        <ColorRow hex={vars.chartFour00} text="chart-four-00" />
        <ColorRow hex={vars.chartFour05} text="chart-four-05" />
        <ColorRow hex={vars.chartFour10} text="chart-four-10" />
        <ColorRow hex={vars.chartFour15} text="chart-four-15" />
        <ColorRow hex={vars.chartFour20} text="chart-four-20" />
        <ColorRow hex={vars.chartFour30} text="chart-four-30" />
        <ColorRow hex={vars.chartFour40} text="chart-four-40" />
        <ColorRow hex={vars.chartFour50} text="chart-four-50" />
        <ColorRow hex={vars.chartFour60} text="chart-four-60" />
        <ColorRow hex={vars.chartFour70} text="chart-four-70" />
        <ColorRow hex={vars.chartFour80} text="chart-four-80" />
        <ColorRow hex={vars.chartFour90} text="chart-four-90" />
      </StyleGroupBody>
    </StyleTable>
  );
};

export default ThemePreview;
