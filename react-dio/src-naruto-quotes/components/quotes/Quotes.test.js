import { render,screen } from "@testing-library/react";
import { Quotes } from ".";

test('render received quote, speaker and a button', () => {
    const quote = 'test quote';
    const speaker = 'random speaker';
    render(<Quotes quote={quote} speaker={speaker} />);

    const quoteEl = screen.getByText(quote);
    const speakerEl = screen.getByText(`- ${speaker}`);
    const buttonEl = screen.getByRole('button');

    expect(quoteEl).toBeInTheDocument();
    expect(speakerEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
})